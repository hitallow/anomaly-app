const cpuUsage = async (segundsTime: number) => {
  return new Promise<void>((resolve) => {
    const startTime = new Date().getTime();

    const target = startTime + segundsTime * 1000;

    const interval = setInterval(() => {
      while (true) {
        const currentTime = new Date().getTime();
        if (currentTime > target) {
          clearInterval(interval);
          resolve();
          break;
        }
      }
    });
  });
};

export { cpuUsage };
