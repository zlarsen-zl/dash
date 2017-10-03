class Api::PullrequestsController < ApplicationController
  def index
    github = Github.new basic_auth: "#{ENV['USERNAME']}:#{ENV['PASSWORD']}"
    pulls = github.pull_requests.list ENV['USERNAME'], params[:repo]
    render json: pulls
  end

  private
    
    def pull_params
      params.require(:pull).permit(:name, :description)
    end
end
