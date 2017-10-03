class Api::ReposController < ApplicationController
  before_action :set_github

  def index
    repos = @github.repos.list
    render json: repos
  end

  def index_contributors
    contributors = @github.repos.contributors ENV['USERNAME'], params[:repo]
    render json: contributors
  end

  def index_collaborators
    collaborators = @github.repos.collaborators.list ENV['USERNAME'], params[:repo]
    render json: collaborators
  end

  def create
    repo = @github.repos.create(
      name: repo_params['name'],
      description: repo_params['description'],
      private: repo_params['private1'],
      homepage: "https://github.com",
    )
    repo_params[:collaborators].each do |collaborator|
      @github.repos.collaborators.add ENV['USERNAME'], repo_params['name'], collaborator
    end
    render json: repo.body
  end

  private

    def set_github
      @github = Github.new basic_auth: "#{ENV['USERNAME']}:#{ENV['PASSWORD']}"
    end

    def repo_params
      params.require(:repo).permit(:name, :description, :private1, { collaborators: [] })
    end
end
