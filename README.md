# quotes and wisdom in your terminal. 

------------------------------------
 ### [Project Inspiration](https://andcomputers.io/bars-for-days-chips-with-lays/)

james baldwin, rappers, and various devs.
originally forked from [captainsafia/fortuity](https://github.com/captainsafia/fortuity).


## What

Get a quote or a lyric everytime you start a new terminal session.


![baldwin_demo](http://g.recordit.co/ZeelOhfxKc.gif)



## Why

Why not? I love music & I love computers.


![this_is_why](https://media.giphy.com/media/xTiN0kxizOHzdVMYus/giphy.gif)


## How


The client is written in node and just interacts with the [API](https://github.com/weAllWeGot/CardiB_api) sending either `GET` or `POST` requests. If you add `cardib4cli` to your `~/.bash_profile` with a couple of arguments it will fire up the node app everytime you open a new terminal window and parse the arguments as inputs into the request. The api hangs some times so the client makes sure to end its process after 0.5 seconds in case it doesn't get a response.


### Demo

![gen_demo](http://g.recordit.co/ggx9CQYZiq.gif)

![demo](http://g.recordit.co/KBxtxFJlg1.gif)


### Install

```
$ npm install -g cardib4cli
```

#### Execute on startup

To print out a bar from a wise set of individuals every time you launch a new shell, you will
need to configure your shell so that this command runs on startup.

When you configure you have the option to get a completely random quote or to limit the pool from which quotes are chosen or to limit the returned lyrics to just those without offensive language (the `sfw` option). 


The options presented below are essentially command line arguments and you can use any combination of them to specify the catalogue of lyrics you want to pull from. For more information on the api [look here](https://github.com/weAllWeGot/CardiB_api) 

```
'sfw'
'james_baldwin'
'cardi_b'
'jayz'
'2pac'
'nas'
'inspirational_code'
'kanye_west'
'lauryn_hill'
'2pac'
'kehlani'
'kendricklamar'
'absoul'
'asaprocky'
'lilboosie'
'bigpun'
'liluzivert'
'bigsean'
'lilwayne'
'camron'
'lilyachty'
'cardi'
'logic'
'ludacris'
'chancetherapper'
'lupefiasco'
'common'
'macmiller'
'domkennedy'
'meekmill'
'drake'
'nas'
'earlsweatshirt'
'fatjoe'
'nickiminaj'
'future'
'notorious'
'game'
'outkast'
'goldlink'
'pushat'
'guccimane'
'rickross'
'schoolboyq'
'isaiahrashad'
'ti'
'jadakiss'
'tylerthecreator'
'vicmensa'
'jayz'
'vincestaples'
'jcole'
'wale'
'jid'
'west'
'joeybada'
'yg'
'kanye'
'youngjeezy'
```

**Bash**


For a quote or lyric from any of the sources listed above use the following
```
$ echo 'cardib4cli' >> ~/.bashrc
```

For a quote or lyric from any of the source above, but also safe for work and free of any cursing or offensive language

```
$ echo 'cardib4cli sfw' >> ~/.bashrc
```

For lyrics only from kanye west or jay-z 
```
$ echo 'cardib4cli kanye_west jay_z' >> ~/.bashrc
```


For only james baldwin quotes
```
$ echo 'cardib4cli james_baldwin' >> ~/.bashrc
```


For only inspirational coding quotes
```
$ echo 'cardib4cli inspirational_code' >> ~/.bashrc
```


For only lauryn_hill quotes
```
$ echo 'cardib4cli lauryn_hill' >> ~/.bashrc
```
etc....
Same applies in scenarios below.

**Zsh**
```
$ echo 'cardib4cli' >> ~/.zshrc 
```

**Fish**
```
$ echo 'cardib4cli' >> ~/.config/fish/config.fish
```

💡 After editing, run:
source ~/.bashrc
to apply changes right away.

## Contributing

Its still pretty early but if you have suggestions, thoughts, feedback, criticism, etc feel free to open a PR or submit an Issue. 

Thanks in advance :blush:

--------------------------------------------------------------------------

#### Donating

If ya feeling generous, [hollr @ the kid](https://buy.stripe.com/7sIg1Udac6xZegodQR) :heart:


