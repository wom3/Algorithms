def insert_sort(arr)
  (1...arr.length).each do |j|
    key = arr[j]
    i = j - 1
    while i >= 0 && arr[i] > key
      arr[i + 1] = arr[i]
      i -= 1
    end
    arr[i + 1] = key
  end
  arr
end

puts insert_sort([5, 4, 3, 2, 1]).inspect
