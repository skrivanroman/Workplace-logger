import XLSX from 'xlsx'
import sequelize from './connection'
import Group from './models/group'
import WorkPlace from './models/workPlace'

const loadData = async () => {
    await sequelize.sync({
        alter: true,
    })

    const sheet = XLSX.readFile('C:\\Users\\gewes\\Downloads\\skarohledy_cidla.xlsx')

    const seen: any = []
    for (let i = 30; i < 250; i++) {
        const entry: any = {}
        if (sheet.Sheets.List1[`A${i}`]?.v) entry.sensorNumber = sheet.Sheets.List1[`A${i}`].v

        if (sheet.Sheets.List1[`C${i}`]?.v) entry.name = sheet.Sheets.List1[`C${i}`].v

        if (sheet.Sheets.List1[`E${i}`]?.v) entry.roomName = sheet.Sheets.List1[`E${i}`].v

        if (sheet.Sheets.List1[`G${i}`]?.v) entry.phoneNumber = sheet.Sheets.List1[`G${i}`].v

        if (entry?.name) WorkPlace.create(entry)

        const groupName = sheet.Sheets.List1[`D${i}`]?.v
        if (groupName && !seen.includes(groupName)) {
            Group.create({ name: groupName })
            seen.push(groupName)
        }
    }
    for (let i = 30; i < 250; i++) {
        if (sheet.Sheets.List1[`C${i}`]?.v) {
            const name = sheet.Sheets.List1[`C${i}`].v

            if (sheet.Sheets.List1[`D${i}`]?.v) {
                const groupName = sheet.Sheets.List1[`D${i}`].v

                const place = await WorkPlace.findOne({
                    where: {
                        name,
                    },
                })
                const group: any = await Group.findOne({
                    where: {
                        name: groupName,
                    },
                })

                place?.update({
                    groupIdGroup: group.idGroup,
                })
            }
        }
    }
}

export default loadData
