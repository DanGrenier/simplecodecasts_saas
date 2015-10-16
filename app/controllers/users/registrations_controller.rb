class Users::RegistrationsController < Devise::RegistrationsController
   def create
     super do |resource|        #Import the code from the ancestor
         if params[:plan]       #If the plan variable is filled up (it should be)
             resource.plan_id = params[:plan]       #Assign the plan to the user resource
             if resource.plan_id == 2               #If the plan is Pro, save with payment
                 resource.save_with_payment         #Defined in user.rb in App/models/user.db
             else
                 resource.save                      #If the plan is free, just save data to db
             end
         end
     end
   end
end