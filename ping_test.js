const { exec } = require('child_process');
const fs = require('fs');

const ipList = [
  "xxx.xxx.xxx.xxx",
  "xxx.xxx.xxx.xxx",
  "tambahkan daftar IP Anda di sini"
];

function pingIp(ip) {
  const outputFilePath = "ping_results.txt";
  let rtoCount = 0;

  console.log(`Ping ke ${ip}:`);

  for (let i = 1; i <= 4; i++) {
    exec(`ping -c 1 ${ip}`, (error, stdout) => {
      const pingResult = stdout.match(/time=(\d+\.\d+) ms/);

      if (error || !pingResult) {
        console.log("Request timeout");
        rtoCount++;

        if (rtoCount === 1) {
          return;
        }
      } else {
        console.log(`${pingResult[1]} ms`);

        if (parseFloat(pingResult[1]) < 100) {
          fs.appendFile(outputFilePath, `http://${ip}:9876\n`, (err) => {
            if (err) throw err;
          });
          return;
        }
      }
    });
  }
}

ipList.forEach(ip => {
  pingIp(ip);
  console.log("\n--------------------------------\n");
});

console.log("Hasil ping di bawah 100ms disimpan dalam file 'ping_results.txt'.");
