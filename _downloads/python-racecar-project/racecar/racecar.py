# Racecar - a top-down racing game made with pygame.
#
# Run it with:  python racecar.py

import pygame

# ---------------------------------------------------------------------------
# Settings - try changing these!
# ---------------------------------------------------------------------------

# Where the car starts. Click on the track while the game is running and it
# will tell you the x and y of the spot you clicked.
START_X = 345
START_Y = 68

# Which way the car starts off facing, in degrees:
#   0 = right, 90 = down, 180 = left, 270 = up
START_ANGLE = 0


# ---------------------------------------------------------------------------
# Set up the game - this all happens once, before the game starts
# ---------------------------------------------------------------------------

pygame.init()

# Load the track picture, and make the window exactly the same size as it.
track_image = pygame.image.load("racetrack.png")
screen = pygame.display.set_mode(track_image.get_size())
pygame.display.set_caption("Racecar")

# Load the car picture. It's drawn facing right (0 degrees).
car_image = pygame.image.load("car.png")

# The clock keeps the game running at the same speed on every computer.
clock = pygame.time.Clock()

# Where the car is, and which way it's facing.
car_x = START_X
car_y = START_Y
car_angle = START_ANGLE


# ---------------------------------------------------------------------------
# The game loop - everything in here happens again and again, 60 times a
# second, until the game ends
# ---------------------------------------------------------------------------

running = True
while running:

    # --- 1. Check for events (things that have just happened) ---
    for event in pygame.event.get():
        # The window's close button was clicked: end the game.
        if event.type == pygame.QUIT:
            running = False
        # The Esc key was pressed: end the game.
        if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
            running = False
        # The mouse was clicked: say where.
        if event.type == pygame.MOUSEBUTTONDOWN:
            print("You clicked at x =", event.pos[0], "y =", event.pos[1])

    # --- 2. Update the game (move things around) ---

    # --- 3. Draw everything ---

    # Turn the car picture to face the way the car is facing.
    # pygame turns pictures anticlockwise, but our angles go clockwise
    # (90 is down), so we need a minus sign.
    turned_car = pygame.transform.rotate(car_image, -car_angle)

    # Turning a picture makes it bigger (it needs room for the corners), so
    # work out where to put it so that its centre is at car_x, car_y.
    car_rect = turned_car.get_rect(center=(round(car_x), round(car_y)))

    # Draw the track first, then the car on top of it.
    screen.blit(track_image, (0, 0))
    screen.blit(turned_car, car_rect)

    # Show the finished picture on the screen.
    pygame.display.flip()

    # Wait until it's time for the next frame (60 frames a second).
    clock.tick(60)

pygame.quit()
