while True:
    numeroDeVezes = int(input())
    if numeroDeVezes == 0:
        break
    partidas = input().split(' ')
    maria_wins = 0
    joao_wins = 0
    for l in range(numeroDeVezes):
        if int(partidas[l]) == 0:
            maria_wins += 1
        else:
            joao_wins += 1
    print("Mary won "+str(maria_wins)+" times and John won "+str(joao_wins)+" times")