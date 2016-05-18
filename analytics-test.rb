require 'FileUtils'

puts "Enter the filetype you want to search (rb, erb, md, or html)"
filetype = gets.chomp.to_s

puts "Processing #{filetype} files recursively in #{Dir.pwd} with Rorybot"
`rorybot **/*.#{filetype} | tee rorybot_output.txt`

input_file = File.open('rorybot_output.txt', 'r')
output_file = File.open('frequency.csv', 'w+')
warning_message = /(?:warning\s{2,}?)(.+?)(?=\s{2,})/
frequency = Hash.new(0)

puts "Counting warning messages"
input_file.read.scan(warning_message).map { |w| frequency[w] + 1 }

puts "Writing result to frequency.csv"
frequency.each do |key, value|
  kv = "#{key}, #{value}"
  kv.encode("UTF-8")
  output_file.puts(kv.tr('[', '').tr(']', ''))
end

puts "Deleting temporary files"
FileUtils.rm('rorybot_output.txt')

puts "Use Google Sheets to open frequency.csv for further processing"
