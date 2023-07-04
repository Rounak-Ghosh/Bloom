import UserModel from "../Models/userModel.js";

// Check a user
export const subscribeUser = async(req, res) => {
      const {id, username} = req.body;
      
      try {
            const user = await UserModel.findById(id);
            if(user.isPaid) {
                  return res.status(400).json({message : "User has already subscribed!"});
            } else {
                  req.body.isPaid = true;
                  const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
                  res.status(200).json(user);
            }
      } catch (error) {
            res.status(500).json({message: error.message});
      }
}