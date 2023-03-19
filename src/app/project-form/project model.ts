export class projectModel{
    postid:number;
    name:string;
    email:string;
    body:string;
    coverImage:string

    constructor(pid:number, nam:string, email:string,body:string,coverimg:string)
    {
        this.postid=pid;
        this.name=nam;
        this.email=email;
        this.body=body;
        this.coverImage=coverimg
    }
}