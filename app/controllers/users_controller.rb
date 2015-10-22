class UsersController < ApplicationController
    before_action :autnthicate_user!
    def show
        @user = User.find(params[:id])
    end
    
end