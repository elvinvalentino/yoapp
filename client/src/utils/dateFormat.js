import moment from 'moment';

export const getdateString = date => {
  date = new Date(moment.unix(date / 1000));
  return date.toDateString();
}

export const chatListDateFormat = date => {
  date = new Date(moment.unix(date / 1000))
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (today.toDateString() === date.toDateString()) {
    return moment(date).format('HH:mm');
  } else if (yesterday.toDateString() === date.toDateString()) {
    return 'Yesterday';
  } else {
    return moment(date).format('L');
  }
}

export const messageDateFormat = date => {
  date = new Date(moment.unix(date / 1000))
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (today.toDateString() === date.toDateString()) {
    return 'Today';
  } else if (yesterday.toDateString() === date.toDateString()) {
    return 'Yesterday';
  } else {
    return moment(date).format('MMMM DD, yyyy');
  }
}
