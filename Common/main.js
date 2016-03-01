var walkthrough=function(){
	this.last_id=-1;
	this.append_text=function(box,txt_list){
		for (var i=0; i<txt_list.length; i+=1){
			var para = document.createElement("p");
			var node = document.createTextNode(txt_list[i]);

			para.className="caption";

			para.appendChild(node);
			box.appendChild(para);
		}

	}
	this.create_block=function(pic_path,head,txt_list){
		var cur_id=this.last_id+1;
		this.last_id+=1;

		var where=document.getElementById("to_expand");
		var box = document.createElement("div");
		var img = document.createElement("img");
		var header= document.createElement("h3");
		var head_node= document.createTextNode((cur_id)+" . "+head);
		var anchor = document.createElement("a");

		img.className="walk_image";
		img.src=pic_path;
		header.className="caption-title"
		anchor.name=cur_id+"anchor";
		box.className="subtle-tile";
		box.id=cur_id;

		header.appendChild(head_node);
		box.appendChild(header);
		this.append_text(box,txt_list);
		box.appendChild(img);
		box.appendChild(anchor);
		where.appendChild(box);
	}
	this.create_high_nav=function(stage_nav_id){
		//var stages=["main","tribal","vassal","interlude","kingdom","empire"];
		var stages=gen_stages();
		
		var stagebar=document.getElementById(stage_nav_id);
		var cur_loc=location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
		for (var i=0; i<stages.length; i+=1){
			var stage_link = document.createElement("a");
			stage_link.className="stage_link";
			stage_link.text="Ch"+i//.charAt(0).toUpperCase() + stages[i].slice(1);
			stage_link.href=stages[i]+".html"
			stagebar.appendChild(stage_link);
			if (stages[i]+".html"==cur_loc){
				stage_link.className+=" selected-link";
				this.create_navbar(stage_nav_id);
				if (i!=stages.length-1){
					this.create_next(i);
				}else{
					this.no_next();
				}
			}
		}
		
	}
	this.create_navbar=function(navbar_id){
		var navbar=document.getElementById(navbar_id);
		for (var i=0; i<this.last_id+1; i+=1){
			var anchor_start = document.createElement("a");
			anchor_start.href="#"+(i-1)+"anchor";
			anchor_start.text=i.toString();
			anchor_start.className="anchor_link";
			navbar.appendChild(anchor_start);
		}
	}
	this.create_next=function(cur_num)
	{
		var stages=gen_stages();
		var cur_loc=location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
		var next_num=cur_num+1;
		var next_stage=stages[next_num]
		var the_root=location.pathname.substring(0,location.pathname.lastIndexOf("/") + 1);
		var next_loc=the_root+next_stage+".html";
		var next_btn=document.getElementById("next-btn");
		next_btn.href=next_loc;
	}
	this.no_next=function(){
		var next_btn=document.getElementById("next-btn");
		next_btn.style.display="none";
	}
}

