class AddRoleToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :role, :string, null: false, default: "dev"
    add_column :users, :username, :string, null: false
  end
end
