// const Connection = require('../models/connection');

const model = require('../models/connection');

exports.connections = (req, res,next)=>{
    // res.render('./connection/connections.ejs');
    let id = req.params.id;
    let connection = model.find();
    //console.log(story)
    
    if(connection){
        res.render('./connection/connections.ejs', {connection});}
    // }else{
    //     let err = new Error('Cannot find a story with id ' + id);
    //     err.status = 404;
    //     next(err);
    // }
}

exports.getAllConnections = (req, res,next) => {
    let map= new Map();
    let connections = model.find();
        for(let i=0;i<connections.length;i++){
            let events=[];
            let topic=connections[i].EventCategory;
            if(!map.has(topic)){       
                events.push(connections[i]);
                map.set(topic,events);    
            }        
            else{
                let array=map.get(topic);
                array.push(connections[i])
                map.set(topic,array);
            }         
        }
        res.render('./connection/connections',{map:map});
       
}



exports.getConnectionDetail = (req, res,next)=>{
    res.render('./connection/connection.ejs');
}

exports.newConnection = (req, res,next)=>{
    res.render('./connection/newConnection.ejs');
}

exports.create =  (req,res)=>{
    // res.send('Created a new story');
    let connection = req.body;
    model.save(connection);
    console.log(model.find());
    res.redirect('/connections');

};

exports.show = (req,res,next)=>{
    let id = req.params.id;
    let story = model.findById(id);
    console.log(story)
    
    if(story){
        res.render('./connection/connection.ejs', {story});
    }else{
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);

    }        
         
};

exports.update = (req,res,next)=>{
    let story=req.body;
    let id = req.params.id;
    if (model.updateById(id,story)){
        res.redirect('/connections/'+id);
    }else{
        let err = new Error('Cannot find a story with id ' + id);
        err.status=404;
        next(err);
    }
};
exports.edit = (req,res,next)=>{
    let id = req.params.id;
    let story = model.findById(id);

    if(story){
        res.render('./connection/updateConnection', {story});
    }else
    {
        let err = new Error('Cannot find a story with id ' + id);
        err.status=404;
        next(err);

    }
};


exports.delete = (req,res,next)=>{
    // res.send('Delete story with id '+req.params.id);
    let id = req.params.id;
    if(model.deleteById(id))      
        res.redirect('/connections');
    else
    {
        let err = new Error('Cannot find a story with id ' + id);
        err.status=404;
        next(err);
    }
};
