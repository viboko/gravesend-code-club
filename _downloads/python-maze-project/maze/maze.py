# Maze - a maze game made with pygame, with a new random maze every time.
#
# Run it with:  python maze.py

import pygame

# ---------------------------------------------------------------------------
# Settings - try changing these!
# ---------------------------------------------------------------------------

# How big each square of the maze is, in pixels.
CELL = 40

# How many squares across, and how many squares down.
COLUMNS = 10
ROWS = 8

# The gap around the outside of the maze, in pixels.
MARGIN = 40

# How thick the walls are, in pixels.
WALL = 4

# Colours, as amounts of (red, green, blue), from 0 to 255.
BACKGROUND_COLOUR = (255, 255, 255)
WALL_COLOUR = (122, 63, 242)


# ---------------------------------------------------------------------------
# Making the maze
# ---------------------------------------------------------------------------

# (You'll write the make_maze function here.)


# ---------------------------------------------------------------------------
# Set up the game - this all happens once, before the game starts
# ---------------------------------------------------------------------------

pygame.init()

# Make the window big enough for the maze, plus the margin all the way round.
screen = pygame.display.set_mode((COLUMNS * CELL + 2 * MARGIN, ROWS * CELL + 2 * MARGIN))
pygame.display.set_caption("Maze")

# Load the pictures of the player and the goal.
player_image = pygame.image.load("player.png")
goal_image = pygame.image.load("goal.png")

# The clock keeps the game running at the same speed on every computer.
clock = pygame.time.Clock()

# The player starts in the middle of the top-right square.
PLAYER_START = (MARGIN + (COLUMNS - 1) * CELL + CELL // 2, MARGIN + CELL // 2)

# A Rect is a rectangle: it knows where something is (x and y), and how big
# it is (width and height). We make one the same size as each picture.
player = player_image.get_rect(center=PLAYER_START)

# The goal goes in the middle of the bottom-left square.
goal = goal_image.get_rect(center=(MARGIN + CELL // 2, MARGIN + (ROWS - 1) * CELL + CELL // 2))


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

    # --- 2. Update the game (move things around) ---

    # --- 3. Draw everything ---

    # Fill the window with the background colour, to rub out the last frame.
    screen.fill(BACKGROUND_COLOUR)

    # Draw the goal, then the player on top.
    screen.blit(goal_image, goal)
    screen.blit(player_image, player)

    # Show the finished picture on the screen.
    pygame.display.flip()

    # Wait until it's time for the next frame (60 frames a second).
    clock.tick(60)

pygame.quit()
