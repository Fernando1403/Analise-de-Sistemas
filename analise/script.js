//Criem uma classe de post no instagram 
//Quais sao suas caracteristicas e quais são os dados que ela recebe?

class Post{
    constructor(user,postPicture,description){
        this.profilePic = user.profilePic;
        this.userName = user.userName;
        this.postPicture = postPicture;
        this.description = description;
        this.likes = 0;
        this.comments = [
            {
                user: "Comentario",
                pic: "imgs/profile.png",
                comment:"heheheeh"
            }
        ];
    }
    commentPost(user,comment){
        
    }
}