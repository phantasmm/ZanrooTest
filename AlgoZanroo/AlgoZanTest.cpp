#include<iostream>
using namespace std;

int main(void)
{
    int MAX=0;

    int mark=0;
    int indexOpen=0;
    int indexMinus=0;
    int indexClose=0;
    int numStart,numStop;

    string x,y;
    cin>>x;//[1-5],[2-20]   [3-15],[2-20],[5-10]    [1-7],[5-20],[25-100]   [1-7],[10-20],[25-100]
    cin>>y;//[3-7]          [3-5],[8-10]            [6-9],[8-11],[30-50]    [2-5],[11-21],[30-50]

    string w=x;
    string z=y;
    //�� MAX �ҡ input set
    while(mark!=-1){

        indexMinus=w.find('-');
        indexClose=w.find(']');


        numStop=stoi(w.substr(indexMinus+1,indexClose-indexMinus-1));
        if(MAX<numStop){MAX=numStop;}
        //cout<<"NumStop: "<<numStop<<"\tMAX: "<<MAX<<endl;

        mark=w.find(',');
        w=w.substr(mark+1);
        //cout<<"Mark:"<<mark<<"\tLess:"<<w<<endl<<endl;
    }
    //cout<<endl;

    mark=0;//�� MAX �ҡ input negative set
    while(mark!=-1){

        indexMinus=z.find('-');
        indexClose=z.find(']');


        numStop=stoi(z.substr(indexMinus+1,indexClose-indexMinus-1));
        if(MAX<numStop){MAX=numStop;}
        //cout<<"NumStop: "<<numStop<<"\tMAX: "<<MAX<<endl;

        mark=z.find(',');
        z=z.substr(mark+1);
        //cout<<"Mark:"<<mark<<"\tLess:"<<z<<endl<<endl;
    }
    //cout<<endl;

    int Arr[MAX+10];
    for(int i=0 ;i<MAX+10;i++){
        Arr[i]=0;
    }

    mark=0;
    //�ӷء�ӹǹ���Ѵ����� arr ��ٻẺ������ hash ��Ͷ���բ������Ţ 3 ��� array index ��� 3 �դ���� 1
    while(mark!=-1){
        indexOpen=x.find('[');
        indexMinus=x.find('-');
        indexClose=x.find(']');

        numStart=stoi(x.substr(indexOpen+1,indexMinus-1-indexOpen));
        numStop=stoi(x.substr(indexMinus+1,indexClose-indexMinus-1));
        //cout<<"Num:"<<numStart<<"\t"<<numStop<<endl;
        for(int i=numStart;i<=numStop;i++){
            Arr[i]=1;
        }
        mark=x.find(',');
        x=x.substr(mark+1);
        //cout<<"Mark:"<<mark<<"\tLess:"<<x<<endl<<endl;
    }



    //㹷ҧ��Ѻ�ѹ��� ����բ������Ţ 3 � negative set ��� array index ��� 3 �դ���� 0
    mark=0;
    while(mark!=-1){
        indexOpen=y.find('[');
        indexMinus=y.find('-');
        indexClose=y.find(']');

        numStart=stoi(y.substr(indexOpen+1,indexMinus-1-indexOpen));
        numStop=stoi(y.substr(indexMinus+1,indexClose-indexMinus-1));
        //cout<<"Num:"<<numStart<<"\t"<<numStop<<endl;
        for(int i=numStart;i<=numStop;i++){
            Arr[i]=0;
        }
        mark=y.find(',');
        y=y.substr(mark+1);
        //cout<<"Mark:"<<mark<<"\tLess:"<<y<<endl<<endl;
    }



    /*
    //��ǹ����ʴ��� array ������
    for(int i=0 ; i<MAX+1 ; i++){
        if(i%10==0)cout<<endl;
        cout<<Arr[i];

    }
    */
    cout<<endl;
    int prev=0;
    for(int i=0 ; i<MAX+2 ; i++){
        if(Arr[i]==1&&prev==0){
            cout<<"["<<i<<"-";
        }
        if(Arr[i]==0&&prev==1){
            cout<<i-1<<"],";
        }

        prev=Arr[i];
    }
    //����ʴ����Ҩ�е�ҧ�ҡ����仺�ҧ�� [1] �� [1-1] ��з����ش�� , ��駤�ҧ��� ��駹����Դ�����ǹ�������������Ӥѭ
    //��.���ʷ�� 3 ������������ͺ�Դ�Ф�Ѻ �ѹ�����[ 1-5],[12-20],[25-29],[51-100],
}
//0123[56-89]


