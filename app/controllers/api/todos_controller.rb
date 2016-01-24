module Api
  class TodosController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create, :update]

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

    def index
      render json: Todo.all.order(created_at: :desc)
    end

    def update
      sleep 1 # for effect
      todo = Todo.find(params[:id])
      if todo.update(todo_params)
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
