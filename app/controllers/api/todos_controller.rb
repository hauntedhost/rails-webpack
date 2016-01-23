module Api
  class TodosController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]

    def index
      render json: Todo.all
    end

    def create
      todo = Todo.create(todo_params)
      render json: todo
    end

    private

    def todo_params
      params.require(:todo).permit(:note, :completed)
    end
  end
end
