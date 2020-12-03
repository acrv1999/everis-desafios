import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) throws IOException {
    //Uniformes de final de ano
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
        Integer b,a = Integer.parseInt(st.nextToken());


        String nome,tamanho,cor;
        String[] tamanhoCor;
        List<Uniforme> list=new ArrayList<>();

        for(var i=1; i<=a; i++){

            nome=br.readLine().trim();
            tamanhoCor=br.readLine().trim().split(" ");
            cor=tamanhoCor[0];
            tamanho=tamanhoCor[1];
            list.add(new Uniforme(nome,cor,tamanho));

        }
        br.read();
        list.sort(Comparator.comparing((Uniforme uniforme)->uniforme.corUniforme).reversed()
                .thenComparing(uniforme->uniforme.tamanho).reversed().thenComparing(uniforme->uniforme.nomeAluno));

        list.stream().forEach(System.out::println);
        
  }
}

class Uniforme{
    public String nomeAluno;
    public String corUniforme;
    public String tamanho;

    public Uniforme(String nomeAluno, String corUniforme, String tamanho) {
        this.nomeAluno = nomeAluno;
        this.corUniforme = corUniforme;
        this.tamanho = tamanho;
    }

    @Override
    public String toString() {
        return ""+corUniforme+" "+tamanho+" "+nomeAluno;
    }
}