local exception_executors = {"Xeno", "Solara"}
local executor_name = (getexecutorname and getexecutorname()) or (identifyexecutor and identifyexecutor())

if executor_name and table.find(exception_executors, executor_name) then
    loadstring(game:HttpGet("https://raw.githubusercontent.com/Matiftzy/maniezhub/refs/heads/main/fbgfarm/memorysaver.lua"))()
    loadstring(game:HttpGet("https://raw.githubusercontent.com/Matiftzy/maniezhub/refs/heads/main/fbgfarm/alt.lua"))()
    loadstring(game:HttpGet("https://raw.githubusercontent.com/Matiftzy/maniezhub/refs/heads/main/fbgfarm/main.lua"))()
else
    loadstring(game:HttpGet("https://raw.githubusercontent.com/Matiftzy/maniezhub/refs/heads/main/fbgfarm/memorysaver.lua"))()
    loadstring(game:HttpGet("https://raw.githubusercontent.com/Matiftzy/maniezhub/refs/heads/main/fbgfarm/alt.lua"))()
    loadstring(game:HttpGet("https://raw.githubusercontent.com/Matiftzy/maniezhub/refs/heads/main/fbgfarm/main.lua"))()
end
