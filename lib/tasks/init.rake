task :init do
  exec 'rails db:setup && rake searchkick:reindex CLASS=Article'
end