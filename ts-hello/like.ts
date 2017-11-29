
export class LikeComponent{
    constructor(private likeCount?:number,private isLiked?:boolean)
    {

    }

    doLike()
    {
        if(this.isLiked==false){
            this.likeCount++;
            console.log("This post has been Liked");
        }
        else{
            this.likeCount--;
            console.log("this post has been unliked");
        }
        this.isLiked = !this.isLiked;
    }

    get LikeCount(){
        return this.likeCount;
    }

    set LikeCount(value: number)
    {
        this.likeCount = value;
    }

    get IsLiked()
    {
        return this.isLiked;
    }

    set IsLiked(value: boolean)
    {
        this.isLiked = value;
    }
}