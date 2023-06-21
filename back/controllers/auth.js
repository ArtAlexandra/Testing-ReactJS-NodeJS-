import {db} from "../db.js"
//import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = (req, res)=>{
  
   
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(q, [req.body.email,req.body.username], (err,data)=>{
    
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

    
        const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?, ?,?)";
        const values = [req.body.username, req.body.email,  req.body.password]
        db.query(q, values, (err, data)=>{
            if(err) return res.json(err)
            return res.status(200).json("user has been created")
        })
    })

}
export const login = (req, res)=>{
  
   
    
    const q = "SELECT * FROM users WHERE email = ? AND password=?";
    db.query(q, [req.body.email, req.body.password], (err, data)=>{
        if(err) return res.json(err)
        if(data.length ===0) return res.status(404).json("User not found!")
      
        
        if(req.body.password!==data[0].password) return res.status(400).json("Wrong username or password!")

        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...other } = data[0];
    
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(other);
        }
    )
    
}
export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };

export const post_image=(req, res)=>{
  const q = "INSERT INTO Image(`image`) VALUES(?) ";


  db.query(q, [req.body.fileName], (err, data)=>{
      if(err) return res.json(err)
      if(data.length ===0) return res.status(404).json("User not found!")
      return res.status(200).json("image has been insert")
  })
}

export const get_image = (req, res)=>{
  const q = "SELECT image FROM Image WHERE id = ? "
  db.query(q, [req.body.id], (err, data)=>{
   
    if(err) return res.json(err)
    if(data.length ===0) return res.status(404).json("User not found!")
    return res.status(200).json(data)
  })
}