class Api::IssuesController < ApplicationController
  before_action :set_github, only: [:index, :repo_index]

  def index
    issues = @github.issues.list :user
    render json: issues
  end

  def repo_index
    issues = @github.issues.list user: 'user-name', repo: 'repo-name'
    render json: issues
  end

  def create
    github = Github.new basic_auth: "#{ENV['USERNAME']}:#{ENV['PASSWORD']}", user: issue_params['user'], repo: issue_params['repo']
    issue = github.issues.create(
      title: issue_params['title'],
      body: issue_params['body'],
      assignee: issue_params['assignee'],
      labels: [issue_params['labels']],
    )
    full_issues = github.issues.list :user, issue_params['repo'], issue.number
    issue_repo = full_issues.select { |i| i.number === issue.number }.first
    render json: issue_repo
  end

  private

    def set_github
      @github = Github.new basic_auth: "#{ENV['USERNAME']}:#{ENV['PASSWORD']}"
    end

    def issue_params
      params.require(:issue).permit(:title, :body, :assignee, :user, :repo, :labels)
    end
end
