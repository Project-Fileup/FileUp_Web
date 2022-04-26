const throttle = (callback: Function, limit: number) => {
  let waiting = false;

  return function(this: any) {
    const context = this;

    if (!waiting) {
      callback.apply(context, arguments);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }
}

export default throttle;