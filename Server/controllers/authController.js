const admin=require('firebase-admin')
admin.initializeApp({
    credential:admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL, 
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
})

const signUp=async(req,res)=>{
    const userResponse= await admin.auth().createUser({
        email: req.body.email,
        password:req.body.password,
        emailVerified:false,
        disabled:false,
        displayName:req.body.username,
        photoURL:req.body.photoId,
    })
    const data=await admin.auth().getUser(userResponse.uid)
    res.status(200).json(data)
}

const profile=async(req,res)=>{
    const data=await admin.auth().getUser(req.params.id)
    res.status(200).json(data)
}

module.exports={
    signUp,profile
}