class FaqsController < ApplicationController
  def index
    faqs = Faq.all
    render json: faqs
  end

  def create
    faq = Faq.new(faq_params)
    if faq.save
      render json: faq 
    else
      render json: 'check all your inputs'
    end
  end

  def update
    faq = Faq.find_by(id: params[:id])
    render json: faq 
  end

  def delete
    faq = Faq.find_by(id: params[:id])
    if faq.destroy 
      render json: 'Q&A Deleted'
    else 
      render json 'there was an error deleting this freqently asked question'
    end
  end

  private

  def faq_params 
    params.require(:faq).permit(:question, :answer)
  end

end
