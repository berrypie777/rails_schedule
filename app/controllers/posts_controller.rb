class PostsController < ApplicationController
  def index
    @posts = Post.all
    @total_count = @posts.count
    @today = Date.today

  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(params.require(:post).permit(:title, :start_date, :end_date, :all_day, :memo, :created_at, :updated_at))
    if @post.save
      flash[:notice] = "スケジュールを作成しました"
      redirect_to :posts      
    else
      flash.now[:alert] = "スケジュールの作成に失敗しました"
      render "new"  
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(params.require(:post).permit(:title, :start_date, :end_date, :all_day, :memo, :created_at, :updated_at))
      flash[:notice] = "スケジュールを更新しました"
      redirect_to :posts
    else
      flash.now[:alert] = "スケジュールの更新に失敗しました"
      render "edit"
    end  
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to :posts
  end
end
