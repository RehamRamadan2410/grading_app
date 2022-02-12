const yargs = require('yargs')
const data = require('./data')

yargs.command({
    command:'add',
    describe:'Add data',
    builder:{
        id:{
                describe:'This is id description in add command',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is name description in add command',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:'This is degree description in add command',
        demandOption:true,
        type:'array'
    },
    Comment:{
        describe:'This is comment description in add command',
                type:'string'
    },
    },
    handler:(x)=>{
        // console.log(x)
       data.adddata(x.id,x.name,x.degree,x.comment,x.sum)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete data',
    builder:{
        id:{
            describe:'This is id description in delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        data.removedata(x.id)
    }
})
yargs.command({
    command:'read',
    describe:'read data',
    builder:{
        id:{
            describe:'This is id description in read command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        data.readdata(x.id)
    }
})
yargs.command({
    command:'list',
    describe:'List data',
    handler:()=>{
       data.listdata()
    }
})
yargs.parse()
// node app.js add --id=12 --name='reham' --degree=10 20 30 --comment="good"

// node app.js add --id=13 --name='eyad' --degree=20 20 30 --comment="v good"
//node app.js delete --id=13
//node app.js read --id=13
//node app.js list
// node app.js add --id=14 --name='ahmed' --degree=40 20 30 --comment="good" --sum
// node app.js add --id=16 --name='ahmed' --degree=50 20 30  --sum --comment="good" 

