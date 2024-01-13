#!/bin/bash
ip_list=(
"xxx.xxx.xxx.xxx"
"xxx.xxx.xxx.xxx"
"add your ip list here"
)

ping_ip() {
  local ip=$1
  local output_file="ping_results.txt"
  local ping_result

  echo "Ping ke $ip:"
  local rto_count=0
  
  for ((i=1; i<=4; i++)); do
    ping_result=$(ping -c 1 $ip | grep "time=" | cut -d' ' -f7)
    
    if [ -z "$ping_result" ]; then
      echo "Request timeout"
      ((rto_count++))
      
      if [ "$rto_count" -eq 1 ]; then
        break
      fi
    else
      echo "$ping_result ms"
      
      if (( $(echo "$ping_result < 100" | bc -l) )); then
        echo "http://$ip:9876" >> $output_file
        break
      fi
    fi
  done
}

for ip in "${ip_list[@]}"; do
  ping_ip "$ip"
  echo -e "\n--------------------------------\n"
done

echo "Hasil ping di bawah 100ms disimpan dalam file 'ping_results.txt'."