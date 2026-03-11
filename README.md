# Roblox Key Generator

## Documentation on How to Use the Key Generator
1. Clone the repository:
   ```bash
   git clone https://github.com/reyesisamar455-svg/roblox-key-generator.git
   cd roblox-key-generator
   ```
2. Open the `keyGenerator.py` file to generate keys.
3. Run the script to generate a new key:
   ```bash
   python keyGenerator.py
   ```

## How to Validate Keys in Roblox Studio Scripts
To validate keys in your Roblox Studio scripts, you can use the provided API in this repository. Here’s a basic example:

```lua
local key = "YOUR_USER_KEY"
local isValid = validateKey(key)
if isValid then
    print("Key is valid!")
else
    print("Invalid key.")
end
```

Make sure to replace `YOUR_USER_KEY` with the key you want to validate.

## Project Setup Instructions
1. Ensure you have Python installed on your machine.
2. Install required dependencies by running:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the application:
   ```bash
   python app.py
   ```
4. Follow the instructions in the application to complete the setup.

## License
This project is licensed under the MIT License.