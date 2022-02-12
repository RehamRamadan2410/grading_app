const fs = require('fs')
const adddata = (id,name,degree,comment,sum) =>{
    const data = loaddata() // [] 
    data.forEach((student)=>{
        
              sum = 0
        // 10 
        // 12
        // 15
        student.degree.forEach((deg)=> sum += deg)
        console.log(sum)
        savedata(data)
    })
    const duplicateTitles = data.find((dat)=>{
        
        return dat.id === id
    })
    console.log(duplicateTitles) 

    if(!duplicateTitles){
        data.push({
            id, // shorthand property
            name,
            degree,
            sum,
            comment
        })  
        // data.forEach((student)=>{
        
        //     // const data = loaddata()
        //     sum = 0
        //     // 10 
        //     // 12
        //     // 15
        //     student.degree.forEach((deg)=> sum += deg)
        //     // console.log(sum)
        //     savedata(data)
        // })
        savedata(data)
        console.log('Saved Susccessfully')
    }
    else{
        console.log('Error duplicate id')
    }
    

}

 
const loaddata = () =>{
    // json
    // error first time run bec. notes.json doesnot exist in first time
    
    try{
        
    const d = fs.readFileSync('data.json').toString()
    return JSON.parse(d) 
    }
    catch(e){
        return []
    }
}

const savedata = (data) =>{
    
    const saveData = JSON.stringify(data)
    fs.writeFileSync('data.json',saveData)
}

const removedata = (id) =>{
    const data = loaddata()
    
    const dataToKeep = data.filter((dat)=>{ 
        
        return dat.id !== id
    })
    console.log(data.length) 
    console.log(dataToKeep.length) 
    if(dataToKeep.length !== data.length){
        savedata(dataToKeep)
        console.log('Removed Successfully')
    }
    else {
        console.log('id is not found')
    }
}

const readdata = (id) =>{
    const data = loaddata()
    const dataToRead = data.find((el)=>{
        
        return el.id === id
    })
    console.log(dataToRead) // {}  // undefined
    if(dataToRead){
        console.log(dataToRead.name,dataToRead.degree,dataToRead.comment )
    }
    else{
        console.log('Not Found')
    }
}

//////////////list//////////////////////////////
const listdata = () =>{
    const data = loaddata()
    data.forEach((el)=>{
        console.log(el.id,el.name,el.degree,el.comment)
    })
}


module.exports = {
    adddata,
    removedata,
    readdata,
    listdata
}