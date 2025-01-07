def validate_pet_number(number):
    try:
        num = int(number)
        if num < 0:
            return False
        return True
    except ValueError:
        return False

def get_customer_info():
    print("\n=== Customer Information Form ===\n")
    
    # Get name with basic validation
    while True:
        name = input("Please enter your name: ").strip()
        if name and all(x.isalpha() or x.isspace() for x in name):
            break
        print("Please enter a valid name (letters and spaces only)")
    
    # Get number of pets with validation
    while True:
        num_pets = input("How many pets do you have? ")
        if validate_pet_number(num_pets):
            num_pets = int(num_pets)
            break
        print("Please enter a valid number (0 or positive)")
    
    # Get hair color
    while True:
        hair_color = input("What is your natural hair color? ").strip().lower()
        if hair_color and hair_color.isalpha():
            break
        print("Please enter a valid hair color (letters only)")
    
    return {
        "name": name,
        "number_of_pets": num_pets,
        "hair_color": hair_color
    }

def main():
    try:
        customer_info = get_customer_info()
        print("\n=== Summary ===")
        print(f"Name: {customer_info['name']}")
        print(f"Number of pets: {customer_info['number_of_pets']}")
        print(f"Hair color: {customer_info['hair_color']}")
    except KeyboardInterrupt:
        print("\nForm submission cancelled.")
    except Exception as e:
        print(f"\nAn error occurred: {e}")

if __name__ == "__main__":
    main()
