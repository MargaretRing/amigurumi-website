# Crochet amigigurumi pattern creator website

This is the source code for my amigurumi pattern creator site. It allows you to deform spheres to create crochet patterns. Here is an example of a pattern I created using it:

<img height="200" alt="image" src="https://github.com/user-attachments/assets/c60e0674-9c2b-4b48-a551-efc5bbd03802" />
<img height="200" alt="image" src="https://github.com/user-attachments/assets/ed6a1c72-2a39-4ac2-8a72-716af3694a91" />

# Demo video

https://github.com/user-attachments/assets/6a4c1d29-905b-4171-8b68-909a75783c40

# How it works

The algorithm behind creating different crocheted 3D shapes is surprisingly simple. It can be written in pseudocode like this:

    Starting_Stitches = 6
    Increase_Rounds = 3
    Additional_Flat_Rounds = 0
    round = 0

    sc Starting_Stitches into mr

    for Increase_Rounds:
        for Starting_Stitches:
            sc * round, inc
        round += 1

    Middle_Rounds = Increase_Rounds + 1 + Additional_Flat_Rounds
    for Middle_Rounds:
        sc around

    Decrease_Rounds = Increase_Rounds
    for Decrease_Rounds:
        for Starting_Stitches:
            sc * round, dec
        round -= 1

Changing the variables deforms and scales the shape in different ways.
