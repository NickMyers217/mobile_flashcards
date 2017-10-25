import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const STATE_KEY = 'mobile_flashcards:state';
const NOTIFICATION_KEY = 'mobile_flashcards:notifications';

export const getDecks = () =>
  AsyncStorage
    .getItem(STATE_KEY)
    .then(JSON.parse)
    .catch(console.error);

export const saveDecks = (decks) =>
  AsyncStorage
    .mergeItem(STATE_KEY, JSON.stringify(decks))
    .catch(console.error);

export const clearDecks = () =>
  AsyncStorage.removeItem(STATE_KEY);

const createNotification = () => ({
  title: 'Study flashcards!',
  body: "Don't forget to study today!",
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
});

export const setLocalNotification = () =>
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(createNotification(), {
                time: tomorrow,
                repeat: 'day'
              });

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    })
    .catch(console.error);

export const clearLocalNotification = () =>
  AsyncStorage
    .removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
