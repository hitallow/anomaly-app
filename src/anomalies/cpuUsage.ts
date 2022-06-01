const cpuUsage = async (segundsTime: number) => {
  const startTime = new Date().getTime();

  const target = startTime + segundsTime * 1000;

  const interval = setInterval(() => {
    while (true) {
      const currentTime = new Date().getTime();
      if (currentTime > target) {
        clearInterval(interval);
        break;
      }
    }
  });
};

export { cpuUsage };
