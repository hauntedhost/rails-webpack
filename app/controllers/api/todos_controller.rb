module Api
  class TodosController < ApplicationController
    def index
      render json: Todo.all
    end
  end
end
