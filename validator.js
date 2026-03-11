function validateKey(key)
    -- Example validation rules:
    -- 1. Key must be a string
    -- 2. Key must be 16 characters long
    -- 3. Key must be alphanumeric

    if type(key) ~= "string" then
        return false, "Key must be a string"
    end

    if #key ~= 16 then
        return false, "Key must be 16 characters long"
    end

    if not key:match("^[a-zA-Z0-9]+$") then
        return false, "Key must be alphanumeric"
    end

    return true, "Key is valid"
end