# Ping Script

## Overview

This Bash script pings a list of IP addresses, identifying those with a response time below 100 milliseconds and generating URLs for qualifying addresses.

## Usage

1. **IP List Configuration:**
   Edit the `ip_list` array in the script to include desired IP addresses.

   ``
   ip_list=(
     "xxx.xxx.xxx.xxx"
     "xxx.xxx.xxx.xxx"
     "add your ip list here"
   )``

2. **Run the Script:**
Execute the script with the following command:
``
/ping_test.sh``

## Output

The script displays results for each ping attempt, showing response times or indicating timeouts.
URLs for addresses with response times below 100 milliseconds are added to ping_results.txt.

**Example**

![image](https://github.com/starfrich/ping-tester/assets/119293469/4f2f5618-ede4-45c5-bf11-8815ad1da0d1)


## Note

- Adjust criteria for considering a response as "good" by modifying the condition inside the loop where response times are checked (if (( $(echo "$ping_result < 100" | bc -l) )); then).
- Final results with URLs below 100ms are stored in ping_results.txt.
  
Feel free to customize and use this script for testing purposes to monitor the responsiveness of your specified IP addresses.
