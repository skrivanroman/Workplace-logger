import SerialPort from 'serialport'

const getOpenPorts = async () => {
    const ports = await SerialPort.list() //ports.forEach(port => console.log(port))
    return ports
}

// const port = new SerialPort('COM3', {
//     baudRate: 9600,
// })

// const stream = port.pipe(new SerialPort.parsers.Readline({ delimiter: '\r\n' }))

// let datas = []

// port.on('open', () => {
//     while (false) {}
// })

// stream.on('data', data => {
//     console.log(data)
//     datas.push(data)
//       if (datas.length == 50) {
//         console.log(datas)
//       }
// })

export { getOpenPorts }
