const timeout = (cb, time = 3000) =>
  setTimeout(() => cb, time);

export default timeout;
