export class projectModel{
    post_id:number;
    name:string;
    email:string;
    body:string;
    coverImage:string

    constructor(pid:number, nam:string, email:string,body:string,coverimg:string)
    {
        this.post_id=pid;
        this.name=nam;
        this.email=email;
        this.body=body;
        this.coverImage=coverimg
    }
}