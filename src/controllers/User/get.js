const { User } = require('../../models/User');

const getById = async (id) => {   
    
    if (!id) throw new Error(`Id required`);

    const user = await User.findById(id).populate('reserve_id');    
    
    if (!user) return;   
    
    return { ...user.toJSON()};
};

const getAllUsers = async () => {
    const users = await User.find({}).populate('reserve_id');
    return users;
};


module.exports = {
    getAllUsers,
    getById
};