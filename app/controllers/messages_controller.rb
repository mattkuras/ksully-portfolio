class MessagesController < ApplicationController
    #   skip_before_action :verify_authenticity_token
    
        def index
            messages = Message.all
            render json: messages.to_json(methods: [:full_name])
        end
    
        def show
            message = Message.find(params[:id])
            render json: message.to_json(methods: [:full_name])
    
        end
    
        def create
            message = Message.new(message_params)
            if message.save
                render json: message 
            else
                render json: "there was an error creating your message"
            end
        end
    
        def destroy
            message = Message.find(params[:id])
            message.destroy 
            render json: 'message has been deleted from dashboard'
        end
    
    
        private 
        def message_params
            params.require(:message).permit(
                :first_name,
                :last_name,
                :email,
                :subject,
                :content
            )
        end
    
    end