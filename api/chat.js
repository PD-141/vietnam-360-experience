export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  const message=String(req.body?.message||'').trim(); if(!message)return res.status(400).json({error:'Thiếu nội dung.'});
  if(!process.env.GEMINI_API_KEY)return res.status(500).json({error:'Chưa cấu hình GEMINI_API_KEY trên Vercel.'});
  try{
    const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent',{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':process.env.GEMINI_API_KEY},body:JSON.stringify({contents:[{parts:[{text:message}]}],systemInstruction:{parts:[{text:'Bạn là trợ lý cho website tham quan ảo Việt Nam. Trả lời hữu ích, rõ ràng bằng tiếng Việt.'}]}})});
    const data=await r.json(); if(!r.ok)return res.status(r.status).json({error:data?.error?.message||'Gemini API lỗi.'});
    return res.status(200).json({text:data?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('')||'Không có phản hồi.'});
  }catch(e){return res.status(500).json({error:'Không thể kết nối Gemini API.'})}
}
