module Api
  class TodosController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]

    def index
      render json: Todo.all.order(updated_at: :desc)
    end

    def create
      sleep 1 # for effect
      todo = Todo.new(todo_params)
      if todo.save
        render json: todo
      else
        render json: {
          error: todo.errors.full_messages.to_sentence
        }, status: 422
      end
    end

    private

    def todo_params
      params.require(:todo).permit(:note, :completed)
    end
  end
end
