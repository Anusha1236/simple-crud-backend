const db = require('../models');
const Plates = db.plates;

exports.createPlate = (async(req, res) => {
  try {
    const body = req.body;
    const plate = new Plates();
    for (let key in body) {
      plate[key] = body[key];
    }
    console.log(plate,body);
    const data=await plate.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

exports.updatePlate = (async(req,res)=>{
    try{
    const plateId = req.params.id;
    let body = req.body;
    const plate = await Plates.findByIdAndUpdate(plateId,body);
    const updatedPlate = await Plates.findById(plateId);
    if(!plate) {
        res.status(404).send({message:'user not found'});
    }
        res.status(200).send({message:`user update successfully ${updatedPlate}`});
    }catch(error){
        res.status(500).send({message:`could not update record ${error}`});
    }
});

exports.getPlateList=(async(req,res)=>{
    try{
        const plateList = await Plates.find();
        res.status(200).send(plateList)
    }catch(error){
        res.status(500).send({message:`error in fetching plates list ${error}`})
    }
});

exports.deletePlate=(async(req,res)=>{
    try{
        const plateId=req.params.id;
        console.log(plateId);
        const plate =await Plates.findByIdAndDelete(plateId);
        if(!plate) {
            res.status(404).send({message:"plate not found"});
        }
        res.status(200).send({message:`plate deleted successfully ${plate}`});
    }catch(error){
        res.status(500).send({message:error.message});
    }
});

exports.getPlateById=(async(req,res)=>{
    try{
        const plateId = req.params.id;
        const plate = await Plates.findById(plateId);
        if(!plate){
            res.status(404).send({message:`plate record is not found`});
        }
        res.status(200).send(plate);
    }catch(error){
        res.status(500).send({message:error.message})
    }
})